const Skills = () => {
    const skills = [
        { name: 'React', level: 'Advanced' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'Python', level: 'Expert' },
        { name: 'Data Analysis', level: 'Advanced' },
        { name: 'UI/UX Design', level: 'Advanced' },
        { name: 'Machine Learning', level: 'Intermediate' }
    ];

    return (
        <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {skills.map((skill) => (
                    <div key={skill.name} className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                        <p className="text-gray-600 text-sm">{skill.level}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
