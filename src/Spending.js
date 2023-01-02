import './dist/Spending.css'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import Data from './data.json'



function Spending() {

    const backgroundColor = (day) => {

        const Weekday = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
        let date = new Date()
        let today = Weekday[date.getDay()]

        if (day === today) {
            return 'hsl(186, 34%, 60%)'
        } else
            return 'hsl(10, 79%, 65%)'
    }

    const labels = Data.map(DayData => DayData.day)

    const data = {
        labels: labels,
        datasets: [
            {
                backgroundColor: Data.map(DayData => backgroundColor(DayData.day)),
                hoverBackgroundColor: 'hsl(10, 79%, 75%)',
                borderRadius: 5,
                borderSkipped: false,
                data: Data.map(DayData => DayData.amount),
            },
        ],
    }

    const titleTooltip = (tooltipItems) => {
        return ''
    }

    const labelTooltip = (tooltipItems) => {
        return `$${tooltipItems.formattedValue}`
    }

    const options = {
        responsive: true,
        indexAxis: 'x',
        scales: {
            y: {
                display: false,
                grid: {
                    display: false,
                },
            },
            x: {
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                }
            }
        },
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                caretSize: 0,
                yAlign: 'bottom',
                displayColors: false,
                callbacks: {
                    title: titleTooltip,
                    label: labelTooltip,
                }
            }
        }
    }

    return (
        <div className="Spending" >
            <h1>
                Spending - Last 7 Days
            </h1>
            <div className="Graph">
                <Bar data={data} options={options} />
            </div>
            <hr />
            <div className="Totals">
                <div className="Totals_left">
                    <div className="Totals_text">Total this month</div>
                    <div className="Totals_dollars">$478.33</div>
                </div>
                <div className="Totals_right">
                    <div className="Totals_percent">+2.4%</div>
                    <div className="Totals_text">from last month</div>
                </div>
            </div>
        </div >
    )
}

export default Spending;