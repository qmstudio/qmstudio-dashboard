import React, { useState } from 'react';
import { Github, DollarSign, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import headerImage from './header-image.jpg';

export default function Dashboard() {
  const [projects, setProjects] = useState([
    { 
      id: 1, 
      name: 'Butter Freight', 
      description: 'Skipper AI Agent - Email monitoring, Slack messaging, escalation routing, brief delivery',
      expanded: false,
      progress: 60,
      teamMembers: ['Frank', 'Mark', 'Tierney'],
      budget: { allocated: 5000, spent: 2500 },
      risk: 'low',
      dependencies: ['Pod.ing'],
      notes: 'On track for Mar 10 delivery. Client feedback positive.',
      startDate: '2026-02-01',
      endDate: '2026-03-10',
      phases: [
        { name: 'Scope of Work', status: 'complete' },
        { name: 'Contract', status: 'complete' },
        { name: 'Development', status: 'in-progress' },
        { name: 'Delivery', status: 'upcoming', dueDate: 'Mar 10' },
        { name: 'Training', status: 'upcoming' },
      ],
      tasks: [
        { name: 'Payment Gateway', assignedTo: 'Frank' },
        { name: 'GitHub Publication', assignedTo: 'Mark' },
        { name: 'Server-side Decision', assignedTo: 'Tierney' },
      ],
      meetings: [
        { id: 1, date: 3, time: '12-1pm', attendees: ['Mark', 'Frank'], topic: 'API Design', completed: false },
        { id: 2, date: 5, time: '2-3pm', attendees: ['Frank', 'Tierney'], topic: 'Payment Integration', completed: false },
      ]
    },
    { 
      id: 2, 
      name: 'Pod.ing', 
      description: 'Discussion with Ben',
      expanded: false,
      progress: 40,
      teamMembers: ['Lisa', 'Tom', 'Ben'],
      budget: { allocated: 25000, spent: 8000 },
      risk: 'medium',
      dependencies: [],
      notes: 'Awaiting contract signature. Ben to review this week.',
      startDate: '2026-02-15',
      endDate: '2026-04-15',
      phases: [
        { name: 'Scope of Work', status: 'in-progress' },
        { name: 'Contract', status: 'partial', note: 'Written, not signed' },
        { name: 'Development', status: 'in-progress' },
        { name: 'Delivery', status: 'upcoming' },
      ]
    },
    { 
      id: 3, 
      name: 'AllVetsClub.com', 
      description: 'Development at 50% completion',
      expanded: false,
      progress: 50,
      teamMembers: ['Alex', 'Jordan', 'Casey'],
      budget: { allocated: 60000, spent: 30000 },
      risk: 'high',
      dependencies: ['Payment Gateway Integration'],
      notes: 'URGENT: Due today. Final push needed. Quality assurance in progress.',
      startDate: '2026-01-10',
      endDate: '2026-03-03',
      phases: [
        { name: 'Scope', status: 'complete' },
        { name: 'Contract', status: 'na', note: 'N/A' },
        { name: 'Development', status: 'in-progress', note: '50%' },
        { name: 'Delivery', status: 'upcoming', dueDate: 'Today', urgent: true },
      ]
    },
    {
      id: 4,
      name: 'Wingman',
      description: 'New project - Tierney & Mark',
      expanded: false,
      progress: 0,
      teamMembers: ['Tierney', 'Mark'],
      budget: { allocated: 0, spent: 0 },
      risk: 'low',
      dependencies: [],
      notes: 'New project kicking off. Deadline Mar 13.',
      startDate: '2026-03-06',
      endDate: '2026-03-13',
      phases: [
        { name: 'Scope of Work', status: 'upcoming' },
        { name: 'Development', status: 'upcoming' },
        { name: 'Delivery', status: 'upcoming', dueDate: 'Mar 13' },
      ],
      tasks: [],
      meetings: []
    },
    {
      id: 5,
      name: 'rove.ing',
      description: 'Dog Fooding & Debugging - 90% Complete',
      expanded: false,
      progress: 90,
      teamMembers: ['Riley', 'Morgan', 'Casey'],
      budget: { allocated: 55000, spent: 49500 },
      risk: 'low',
      dependencies: [],
      notes: 'Nearly complete. Internal testing phase. Critical blockers resolved.',
      startDate: '2025-11-15',
      endDate: null,
      phases: [
        { name: 'Scope', status: 'complete' },
        { name: 'Contract', status: 'na', note: 'N/A' },
        { name: 'Development', status: 'in-progress', note: '90%' },
        { name: 'Delivery', status: 'na', note: 'N/A' },
      ],
      tasks: [
        { name: 'Payment Gateway' },
        { name: 'GitHub Publication' },
        { name: 'Server-side Decision' },
      ]
    },
  ]);

  const [leads, setLeads] = useState([]);
  const [newLead, setNewLead] = useState('');
  const [setupItems, setSetupItems] = useState([
    { id: 1, name: 'Bank Account', status: 'pending', icon: DollarSign },
    { id: 2, name: 'GitHub Setup', status: 'pending', icon: Github },
  ]);

  const toggleProjectExpanded = (projectId) => {
    setProjects(projects.map(p => 
      p.id === projectId ? { ...p, expanded: !p.expanded } : p
    ));
  };

  const addLead = () => {
    if (newLead.trim()) {
      setLeads([...leads, { id: Date.now(), name: newLead }]);
      setNewLead('');
    }
  };

  const removeLead = (id) => {
    setLeads(leads.filter(lead => lead.id !== id));
  };

  const updateSetupStatus = (id, status) => {
    setSetupItems(setupItems.map(item => 
      item.id === id ? { ...item, status } : item
    ));
  };

  const getStatusSymbol = (status) => {
    const symbols = {
      'complete': '✓',
      'in-progress': '→',
      'upcoming': '○',
      'partial': '◐',
      'na': '—'
    };
    return symbols[status] || '?';
  };

  const getStatusLabel = (status) => {
    const labels = {
      'complete': 'Complete',
      'in-progress': 'In Progress',
      'upcoming': 'Upcoming',
      'partial': 'Partial',
      'na': 'N/A'
    };
    return labels[status] || status;
  };

  return (
    <div 
      className="min-h-screen" 
      style={{ 
        fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
        backgroundColor: '#ffffff'
      }}
    >
      <div className="relative z-10">
        {/* Header with Ocean Image */}
        <div 
          className="relative h-40 bg-cover bg-center"
          style={{
            backgroundImage: `url(${headerImage})`,
            backgroundColor: '#404040'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="relative h-full flex flex-col justify-end px-12 py-8">
            <h1 className="text-5xl font-light text-white mb-2 tracking-wide" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)', fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em', fontWeight: 300}}>Dashboard</h1>
            <p className="text-xs uppercase tracking-widest text-gray-100" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>Projects & Setup</p>
          </div>
        </div>

        {/* BODY SECTION WITH FRAME */}
        <div
          style={{
            backgroundImage: `url(${headerImage})`,
            backgroundSize: '100px 100px',
            backgroundAttachment: 'fixed',
            paddingLeft: '40px',
            paddingRight: '40px',
            paddingTop: '0px',
            paddingBottom: '0px',
            backgroundColor: '#cccccc'
          }}
        >
          <div className="bg-white overflow-hidden" style={{
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)'
          }}>
        {/* Header with Ocean Image */}
        <div 
          className="relative h-64 bg-cover bg-center"
          style={{
            backgroundImage: `url(${headerImage})`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="relative h-full flex flex-col justify-end px-12 py-8">
            <h1 className="text-5xl font-light text-white mb-2 tracking-wide" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)', fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em', fontWeight: 300}}>Dashboard</h1>
            <p className="text-xs uppercase tracking-widest text-gray-100" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>Projects & Setup</p>
          </div>
        </div>

        {/* Setup Tracking Section */}
        <div className="border-b border-gray-200 px-12 py-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-10">Setup Status</h2>
            <div className="space-y-6">
              {setupItems.map(item => {
                const Icon = item.icon;
                const isComplete = item.status === 'complete';
                return (
                  <div key={item.id} className="flex items-center justify-between pb-6 border-b border-gray-100">
                    <div className="flex items-center gap-4">
                      <Icon className="w-5 h-5 text-gray-700" />
                      <span className="text-base text-black font-medium">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className={`text-sm ${isComplete ? 'text-green-700 font-semibold' : 'text-gray-600'}`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                      <select 
                        value={item.status}
                        onChange={(e) => updateSetupStatus(item.id, e.target.value)}
                        className="text-xs border border-gray-300 bg-white px-3 py-1.5 focus:outline-none focus:border-black transition-colors"
                      >
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="complete">Complete</option>
                      </select>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Projects Section */}
        <div className="border-b border-gray-200 px-12 py-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-10">Active Projects</h2>
            <div className="space-y-8">
              {projects.map(project => (
                <div key={project.id} className="border border-gray-200 rounded-lg p-6">
                  {/* Project Header with Progress Circle */}
                  <div 
                    className="flex items-start justify-between cursor-pointer mb-4"
                    onClick={() => toggleProjectExpanded(project.id)}
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-black">{project.name}</h3>
                      {project.description && <p className="text-sm text-gray-600 mt-1">{project.description}</p>}
                    </div>
                    
                    {/* Circular Progress Indicator */}
                    <div className="ml-8 flex flex-col items-center">
                      <div className="relative w-20 py-1">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                          {/* Background circle */}
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="3"
                          />
                          {/* Progress circle */}
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="#1f2937"
                            strokeWidth="3"
                            strokeDasharray={`${project.progress * 2.827} 282.7`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="text-gray-600 hover:text-black transition-colors ml-4">
                      {project.expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Collapsed Preview - Shows before expansion */}
                  {!project.expanded && (
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="grid grid-cols-3 gap-8 text-sm">
                        {/* Risk Level */}
                        <div>
                          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Risk Level</p>
                          <div className={`inline-block font-medium px-3 py-1 rounded ${
                            project.risk === 'low' ? 'bg-green-100 text-green-700' : 
                            project.risk === 'medium' ? 'bg-yellow-100 text-yellow-700' : 
                            'bg-red-100 text-red-700'
                          }`}>
                            {project.risk.charAt(0).toUpperCase() + project.risk.slice(1)}
                          </div>
                        </div>

                        {/* Timeline */}
                        <div>
                          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Timeline</p>
                          <p className="text-gray-900">
                            {new Date(project.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} 
                            {' - '}
                            {project.endDate ? new Date(project.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'Ongoing'}
                          </p>
                        </div>

                        {/* Budget Summary */}
                        <div>
                          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Budget Status</p>
                          <p className="text-gray-900">
                            ${project.budget.spent.toLocaleString()} / ${project.budget.allocated.toLocaleString()}
                          </p>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div className="bg-gray-900 h-2 rounded-full" style={{width: `${(project.budget.spent / project.budget.allocated) * 100}%`}}></div>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-4 text-center cursor-pointer hover:text-gray-700">Click to expand</p>
                    </div>
                  )}

                  {/* Phase Timeline - Shows only when not expanded */}
                  {!project.expanded && (
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="space-y-2">
                        {project.phases.map((phase, idx) => (
                          <div key={idx} className="flex items-center gap-4">
                            <span className="text-lg text-gray-400 w-6 text-center font-light">{getStatusSymbol(phase.status)}</span>
                            <div className="flex-1 flex items-baseline gap-2">
                              <span className={`text-sm font-medium text-gray-900 ${phase.status === 'complete' ? 'line-through' : ''}`}>{phase.name}</span>
                              <span className={`text-xs text-gray-500 ${phase.status === 'complete' ? 'line-through' : ''}`}>{getStatusLabel(phase.status)}</span>
                              {phase.dueDate && <span className={`text-xs font-semibold text-gray-800 ${phase.status === 'complete' ? 'line-through' : ''}`}>{phase.dueDate}</span>}
                              {phase.note && <span className={`text-xs text-gray-500 ${phase.status === 'complete' ? 'line-through' : ''}`}>({phase.note})</span>}
                              {phase.urgent && <span className="text-xs font-semibold text-red-600">URGENT</span>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Expanded Content - All 7 Sections */}
                  {project.expanded && (
                    <div className="mt-6 pt-6 border-t border-gray-100 space-y-6">
                      
                      {/* 1. Calendar/Timeline */}
                      <div className="mx-negative">
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Project Timeline</p>
                        <div className="border-t border-b border-gray-300" style={{marginLeft: '-24px', marginRight: '-24px', width: 'calc(100% + 48px)'}}>
                          {/* Days of week header - 30% black except Tuesday (65%) */}
                          <div className="grid grid-cols-7">
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
                              <div 
                                key={day} 
                                className="text-center py-1 text-white text-xs font-semibold border-r border-gray-300 last:border-r-0"
                                style={{backgroundColor: idx === 1 ? '#4d4d4d' : '#b3b3b3'}}
                              >
                                {day}
                              </div>
                            ))}
                          </div>
                          
                          {/* Calendar grid - first 14 days only */}
                          <div className="grid grid-cols-7">
                            {/* Week 1 */}
                            <div className="bg-white border-b border-r border-gray-300 p-1 flex items-center justify-center h-8 text-xs text-gray-400">1</div>
                            <div className="bg-white border-b border-r border-gray-300 p-1 flex items-center justify-center h-8 text-xs text-gray-400">2</div>
                            {/* Day 3 - with meeting time */}
                            <div className="bg-white border-b border-r border-gray-300 p-0.5 flex flex-col items-center justify-center h-8 text-xs" style={{backgroundColor: '#e8e8e8'}}>
                              <span className="font-semibold text-gray-700">3</span>
                              <span className="text-gray-600 leading-none" style={{fontSize: '8px'}}>12-1pm</span>
                            </div>
                            <div className="bg-white border-b border-r border-gray-300 p-1 flex items-center justify-center h-8 text-xs text-gray-700" style={{backgroundColor: '#e8e8e8'}}>4</div>
                            {/* Day 5 - with meeting time */}
                            <div className="bg-white border-b border-r border-gray-300 p-0.5 flex flex-col items-center justify-center h-8 text-xs" style={{backgroundColor: '#d4d4d4'}}>
                              <span className="font-semibold text-gray-800">5</span>
                              <span className="text-gray-600 leading-none" style={{fontSize: '8px'}}>2-3pm</span>
                            </div>
                            <div className="bg-white border-b border-r border-gray-300 p-1 flex items-center justify-center h-8 text-xs text-gray-800" style={{backgroundColor: '#d4d4d4'}}>6</div>
                            <div className="bg-white border-b border-gray-300 p-1 flex items-center justify-center h-8 text-xs text-gray-400">7</div>
                            
                            {/* Week 2 - partial */}
                            <div className="bg-white border-b border-r border-gray-300 p-1 flex items-center justify-center h-8 text-xs text-white" style={{backgroundColor: '#707070'}}>8</div>
                            <div className="bg-white border-b border-r border-gray-300 p-1 flex items-center justify-center h-8 text-xs text-white" style={{backgroundColor: '#707070'}}>9</div>
                            <div className="bg-white border-b border-r border-gray-300 p-1 flex items-center justify-center h-8 text-xs text-white" style={{backgroundColor: '#707070'}}>10</div>
                            <div className="bg-white border-b border-r border-gray-300 p-1 flex items-center justify-center h-8 text-xs text-gray-400">11</div>
                            <div className="bg-white border-b border-r border-gray-300 p-1 flex items-center justify-center h-8 text-xs text-gray-400">12</div>
                            <div className="bg-white border-b border-r border-gray-300 p-1 flex items-center justify-center h-8 text-xs text-gray-400">13</div>
                            <div className="bg-white border-b border-gray-300 p-1 flex items-center justify-center h-8 text-xs text-gray-400">14</div>
                          </div>
                        </div>
                      </div>

                      {/* 2. Team Members - MOVED TO BOTTOM */}
                      
                      {/* Development Tasks */}
                      {project.tasks && (
                        <div>
                          <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Development Tasks</p>
                          <div className="space-y-2">
                            {project.tasks.map((task, idx) => (
                              <div key={idx} className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3 flex-1">
                                  <span className="text-gray-400">•</span>
                                  <span className="text-sm text-gray-700">{task.name}</span>
                                </div>
                                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded whitespace-nowrap">Assign: {task.assignedTo}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Team Members */}
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Team Members</p>
                        <div className="flex gap-2 flex-wrap">
                          {project.teamMembers.map((member, idx) => (
                            <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded">{member}</span>
                          ))}
                        </div>
                      </div>

                      {/* 3. Budget */}
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Budget</p>
                        <div className="text-sm">
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-700">Allocated: ${project.budget.allocated.toLocaleString()}</span>
                            <span className="text-gray-700">Spent: ${project.budget.spent.toLocaleString()}</span>
                          </div>
                          <div className="w-full bg-gray-400 rounded-full h-2">
                            <div className="bg-gray-900 h-2 rounded-full" style={{width: `${(project.budget.spent / project.budget.allocated) * 100}%`}}></div>
                          </div>
                        </div>
                      </div>

                      {/* 4. Risk Indicator */}
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Risk Level</p>
                        <div className={`text-sm font-medium capitalize px-3 py-1 rounded-full w-fit ${project.risk === 'low' ? 'bg-green-100 text-green-700' : project.risk === 'medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                          {project.risk}
                        </div>
                      </div>

                      {/* 5. Dependencies */}
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Dependencies</p>
                        {project.dependencies.length > 0 ? (
                          <div className="space-y-1">
                            {project.dependencies.map((dep, idx) => (
                              <div key={idx} className="text-sm text-gray-700">→ {dep}</div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-gray-400 italic">No dependencies</p>
                        )}
                      </div>

                      {/* 6. Notes */}
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Project Notes</p>
                        <p className="text-sm text-gray-700 leading-relaxed">{project.notes}</p>
                      </div>

                      {/* 7. Status Change History */}
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Status History</p>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div>• Started: {project.startDate}</div>
                          {project.endDate && <div>• Expected completion: {project.endDate}</div>}
                          <div>• Current progress: {project.progress}%</div>
                        </div>
                      </div>

                      {/* Meetings Section */}
                      {project.meetings && project.meetings.length > 0 && (
                        <div>
                          <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Scheduled Meetings</p>
                          <div className="space-y-2">
                            {project.meetings.map((meeting) => (
                              <div key={meeting.id} className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                                <input 
                                  type="checkbox" 
                                  checked={meeting.completed}
                                  onChange={() => {
                                    meeting.completed = !meeting.completed;
                                  }}
                                  className="w-4 h-4 cursor-pointer"
                                />
                                <div className="flex-1 min-w-0">
                                  <div className={`text-sm font-medium ${meeting.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                                    {meeting.topic}
                                  </div>
                                  <div className="text-xs text-gray-600">
                                    {meeting.attendees.join(', ')} • Day {meeting.date} • {meeting.time}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      </div>
                    </div>
                  )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leads / Future Projects Section */}
        <div className="px-12 py-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-10">Leads & Future</h2>
            
            {/* Add Lead Form */}
            <div className="mb-12 flex gap-3">
              <input
                type="text"
                value={newLead}
                onChange={(e) => setNewLead(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addLead()}
                placeholder="New lead or potential project"
                className="flex-1 text-base border border-gray-300 bg-white px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
              />
              <button
                onClick={addLead}
                className="text-xs uppercase tracking-widest font-medium border border-black bg-black text-white px-6 py-3 hover:bg-gray-900 transition-colors"
              >
                Add
              </button>
            </div>

            {/* Leads List */}
            {leads.length > 0 ? (
              <div className="space-y-4">
                {leads.map(lead => (
                  <div key={lead.id} className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <span className="text-base text-black">{lead.name}</span>
                    <button
                      onClick={() => removeLead(lead.id)}
                      className="text-gray-400 hover:text-black transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400 italic">No leads yet</p>
            )}
          </div>
        </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-12 py-8 mt-0 bg-white">
          <div className="max-w-7xl mx-auto text-xs text-gray-500">
            © 2026 QMStudio Management Dashboard
          </div>
        </div>
      </div>
    </div>
  );
}