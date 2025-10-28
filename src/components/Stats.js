import './Stats.css';

const stats = [
  {value:'500+', label:'Projects Delivered'},
  {value:'98%', label:'Client Satisfaction'},
  {value:'50+', label:'Tech Experts'},
  {value:'15+', label:'Industry Awards'},
  {value:'24/7', label:'Support Available'}
];

export default function Stats(){
  return (
    <section className="stats">
      <div className="stats-container container">
        {stats.map((s,idx)=>(
          <div className="stat-item" key={idx}>
            <h3>{s.value}</h3>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
