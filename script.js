// Cricket scorecard data and functionality
class CricketScorecard {
  constructor() {
    this.data = null;
    this.init();
  }

  async init() {
    try {
      await this.loadData();
      this.populateScorecard();
    } catch (error) {
      this.displayError('Failed to load match data. Please try again later.');
      console.error('Error initializing scorecard:', error);
    }
  }

  async loadData() {
    // Since we don't have a JSON file, we'll use static data
    // In a real application, this would fetch from an API
    this.data = {
      matchSummary: {
        title: "Northern Superchargers vs Welsh Fire, 3rd Match - Live Cricket Score, Commentary",
        result: "Northern Superchargers won by 8 wkts",
        venue: "Headingley, Leeds",
        date: "Aug 07, 06:30 PM LOCAL",
        toss: "Northern Superchargers won the toss and opt to bowl",
        series: "The Hundred Mens Competition 2025"
      },
      innings: [
        {
          team: "Welsh Fire",
          score: "143-9",
          balls: 100,
          batting: [
            { name: "Steven Smith", dismissal: "b Matthew Potts", runs: 29, balls: 18, fours: 2, sixes: 1, strikeRate: 161.11 },
            { name: "Bairstow (wk)", dismissal: "c Zak Crawley b Adil Rashid", runs: 42, balls: 23, fours: 7, sixes: 0, strikeRate: 182.61 },
            { name: "L Wells", dismissal: "c Michael Pepper b Matthew Potts", runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0.00 },
            { name: "Abell (c)", dismissal: "run out (Zak Crawley/Michael Pepper)", runs: 18, balls: 11, fours: 3, sixes: 0, strikeRate: 163.64 },
            { name: "Kohler-Cadmore", dismissal: "b Tom Lawes", runs: 10, balls: 13, fours: 0, sixes: 0, strikeRate: 76.92 },
            { name: "Saif Zaib", dismissal: "c Harry Brook b Imad Wasim", runs: 13, balls: 10, fours: 2, sixes: 0, strikeRate: 130.00 },
            { name: "Paul Walter", dismissal: "c Zak Crawley b Adil Rashid", runs: 15, balls: 10, fours: 0, sixes: 1, strikeRate: 150.00 },
            { name: "Chris Green", dismissal: "c Dan Lawrence b Amir", runs: 3, balls: 4, fours: 0, sixes: 0, strikeRate: 75.00 },
            { name: "David Payne", dismissal: "b Imad Wasim", runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0.00 },
            { name: "Josh Hull", dismissal: "not out", runs: 3, balls: 3, fours: 0, sixes: 0, strikeRate: 100.00 },
            { name: "Riley Meredith", dismissal: "not out", runs: 7, balls: 5, fours: 1, sixes: 0, strikeRate: 140.00 }
          ],
          bowling: [
            { name: "Imad Wasim", balls: 20, dots: 6, runs: 26, wickets: 2, noballs: 0, wides: 1, rpb: 1.30 },
            { name: "Amir", balls: 20, dots: 5, runs: 28, wickets: 1, noballs: 0, wides: 1, rpb: 1.40 },
            { name: "Tom Lawes", balls: 15, dots: 5, runs: 19, wickets: 1, noballs: 0, wides: 0, rpb: 1.27 },
            { name: "Matthew Potts", balls: 15, dots: 4, runs: 26, wickets: 2, noballs: 0, wides: 0, rpb: 1.73 },
            { name: "Adil Rashid", balls: 20, dots: 5, runs: 25, wickets: 2, noballs: 0, wides: 1, rpb: 1.25 },
            { name: "Dan Lawrence", balls: 10, dots: 1, runs: 19, wickets: 0, noballs: 0, wides: 0, rpb: 1.90 }
          ],
          fallOfWickets: "62-1 (Steven Smith, 37), 62-2 (L Wells, 38), 78-3 (Bairstow, 44), 99-4 (Abell, 62), 102-5 (Kohler-Cadmore, 68), 125-6 (Paul Walter, 84), 132-7 (Saif Zaib, 88), 133-8 (David Payne, 90), 133-9 (Chris Green, 92)",
          extras: "3 (b 0, lb 0, w 3, nb 0, p 0)",
          total: "143 (9 wkts, 100 bls)"
        },
        {
          team: "Northern Superchargers",
          score: "147-2",
          balls: 89,
          batting: [
            { name: "Zak Crawley", dismissal: "not out", runs: 67, balls: 38, fours: 5, sixes: 4, strikeRate: 176.32 },
            { name: "Dawid Malan", dismissal: "c David Payne b Riley Meredith", runs: 41, balls: 29, fours: 4, sixes: 2, strikeRate: 141.38 },
            { name: "Michael-Kyle Pepper (wk)", dismissal: "lbw b Riley Meredith", runs: 4, balls: 7, fours: 0, sixes: 0, strikeRate: 57.14 },
            { name: "Harry Brook (c)", dismissal: "not out", runs: 25, balls: 15, fours: 1, sixes: 2, strikeRate: 166.67 }
          ],
          bowling: [
            { name: "David Payne", balls: 15, dots: 5, runs: 32, wickets: 0, noballs: 0, wides: 0, rpb: 2.13 },
            { name: "Josh Hull", balls: 15, dots: 3, runs: 26, wickets: 0, noballs: 0, wides: 1, rpb: 1.73 },
            { name: "Chris Green", balls: 19, dots: 5, runs: 23, wickets: 0, noballs: 0, wides: 3, rpb: 1.21 },
            { name: "Riley Meredith", balls: 20, dots: 7, runs: 33, wickets: 2, noballs: 0, wides: 2, rpb: 1.65 },
            { name: "Paul Walter", balls: 10, dots: 1, runs: 17, wickets: 0, noballs: 0, wides: 1, rpb: 1.70 },
            { name: "Luke Wells", balls: 5, dots: 2, runs: 8, wickets: 0, noballs: 0, wides: 0, rpb: 1.60 },
            { name: "Saif Zaib", balls: 5, dots: 1, runs: 5, wickets: 0, noballs: 0, wides: 0, rpb: 1.00 }
          ],
          fallOfWickets: "91-1 (Dawid Malan, 52), 100-2 (Michael-Kyle Pepper, 62)",
          extras: "10 (b 0, lb 3, w 7, nb 0, p 0)",
          total: "147 (2 wkts, 89 bls)",
          didNotBat: "Dan Lawrence, David Miller, Imad Wasim, Tom Lawes, Matthew Potts, Adil Rashid, Mohammad Amir"
        }
      ],
      matchInfo: {
        match: "NORS vs WEF, 3rd Match, The Hundred Mens Competition 2025",
        date: "Thursday, August 07, 2025",
        toss: "Northern Superchargers won the toss and opt to bowl",
        time: "5:30 PM",
        venue: "Headingley, Leeds",
        umpires: "David Millns, James Middlebrook",
        thirdUmpire: "Nigel Llong",
        matchReferee: "Dean Cosker"
      },
      squads: {
        "Northern Superchargers": {
          playing: "Zak Crawley, Dawid Malan, Michael-Kyle Pepper (wk), Harry Brook (c), Dan Lawrence, David Miller, Imad Wasim, Tom Lawes, Matthew Potts, Adil Rashid, Mohammad Amir",
          bench: "Mitchell Stanley, Pat Brown, Rocky Flintoff, James Fuller, Graham Clark"
        },
        "Welsh Fire": {
          playing: "Jonny Bairstow (wk), Steven Smith, Luke Wells, Tom Abell (c), Tom Kohler-Cadmore, Paul Walter, Saif Zaib, Chris Green, David Payne, Josh Hull, Riley Meredith",
          bench: "Stephen Eskinazi, Mason Crane, Ajeet Dale, Ben Kellaway"
        }
      },
      latestNews: [
        { title: "Haider Ali suspended by PCB amid criminal investigation in England", time: "3h ago" },
        { title: "All-round Georgia Wareham too good for Welsh Fire", time: "4h ago" },
        { title: "Unforced errors cost India a deserved series win in England", time: "5h ago" },
        { title: "Matt Henry picks five as New Zealand dominate day one", time: "5h ago" },
        { title: "Uncertainty looms over Women's World Cup matches in Bengaluru", time: "7h ago" },
        { title: "Duleep Trophy, 2025 squads: Dhruv Jurel to lead Central Zone", time: "7h ago" }
      ]
    };
  }

  populateScorecard() {
    try {
      this.populateMatchHeader();
      this.populateInnings();
      this.populateMatchInfo();
      this.populateSquads();
      this.populateLatestNews();
    } catch (error) {
      this.displayError('Error displaying match data.');
      console.error('Error populating scorecard:', error);
    }
  }

  populateMatchHeader() {
    const { matchSummary } = this.data;
    document.getElementById('match-title').textContent = matchSummary.title;
    document.getElementById('match-result').textContent = matchSummary.result;
  }

  populateInnings() {
    this.data.innings.forEach((innings, index) => {
      const inningsIndex = index + 1;
      this.populateBatting(innings, inningsIndex);
      this.populateBowling(innings, inningsIndex);
      this.populateFallOfWickets(innings, inningsIndex);
      this.populateExtrasTotal(innings, inningsIndex);
    });
  }

  populateBatting(innings, inningsIndex) {
    const tbody = document.getElementById(`innings-${inningsIndex}-batting`);
    tbody.innerHTML = '';

    innings.batting.forEach(batsman => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>
          <div class="player-name">${batsman.name}</div>
          <div class="dismissal">${batsman.dismissal}</div>
        </td>
        <td>${batsman.runs}</td>
        <td>${batsman.balls}</td>
        <td>${batsman.fours}</td>
        <td>${batsman.sixes}</td>
        <td>${batsman.strikeRate.toFixed(2)}</td>
      `;
      tbody.appendChild(row);
    });
  }

  populateBowling(innings, inningsIndex) {
    const tbody = document.getElementById(`innings-${inningsIndex}-bowling`);
    tbody.innerHTML = '';

    innings.bowling.forEach(bowler => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td class="player-name">${bowler.name}</td>
        <td>${bowler.balls}</td>
        <td>${bowler.dots}</td>
        <td>${bowler.runs}</td>
        <td>${bowler.wickets}</td>
        <td>${bowler.noballs}</td>
        <td>${bowler.wides}</td>
        <td>${bowler.rpb.toFixed(2)}</td>
      `;
      tbody.appendChild(row);
    });
  }

  populateFallOfWickets(innings, inningsIndex) {
    const fallOfWicketsElement = document.querySelector(`#innings-${inningsIndex}-fall-of-wickets p`);
    fallOfWicketsElement.textContent = innings.fallOfWickets;
  }

  populateExtrasTotal(innings, inningsIndex) {
    document.getElementById(`innings-${inningsIndex}-extras`).textContent = `Extras: ${innings.extras}`;
    document.getElementById(`innings-${inningsIndex}-total`).textContent = `Total: ${innings.total}`;
  }

  populateMatchInfo() {
    const { matchInfo } = this.data;
    const tbody = document.getElementById('match-info-table');
    tbody.innerHTML = '';

    const infoItems = [
      ['Match', matchInfo.match],
      ['Date', matchInfo.date],
      ['Toss', matchInfo.toss],
      ['Time', matchInfo.time],
      ['Venue', matchInfo.venue],
      ['Umpires', matchInfo.umpires],
      ['Third Umpire', matchInfo.thirdUmpire],
      ['Match Referee', matchInfo.matchReferee]
    ];

    infoItems.forEach(([label, value]) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${label}</td>
        <td>${value}</td>
      `;
      tbody.appendChild(row);
    });
  }

  populateSquads() {
    const { squads } = this.data;
    
    // Northern Superchargers
    const northernDiv = document.getElementById('northern-superchargers-squad');
    const northernPlayingP = northernDiv.querySelector('p');
    const northernBenchP = northernDiv.querySelectorAll('p')[1];
    
    northernPlayingP.textContent = squads["Northern Superchargers"].playing;
    northernBenchP.textContent = squads["Northern Superchargers"].bench;

    // Welsh Fire
    const welshDiv = document.getElementById('welsh-fire-squad');
    const welshPlayingP = welshDiv.querySelector('p');
    const welshBenchP = welshDiv.querySelectorAll('p')[1];
    
    welshPlayingP.textContent = squads["Welsh Fire"].playing;
    welshBenchP.textContent = squads["Welsh Fire"].bench;
  }

  populateLatestNews() {
    const { latestNews } = this.data;
    const newsList = document.getElementById('latest-news-list');
    newsList.innerHTML = '';

    latestNews.forEach(news => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="#">${news.title}</a>
        <div style="font-size: 12px; color: #999; margin-top: 5px;">${news.time}</div>
      `;
      newsList.appendChild(li);
    });
  }

  displayError(message) {
    const errorElement = document.getElementById('error-message');
    errorElement.textContent = message;
    errorElement.hidden = false;
    
    // Hide error after 5 seconds
    setTimeout(() => {
      errorElement.hidden = true;
    }, 5000);
  }
}

// Initialize the scorecard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new CricketScorecard();
});

// Add some interactive functionality
document.addEventListener('DOMContentLoaded', () => {
  // More News button functionality
  const moreNewsBtn = document.getElementById('more-news-btn');
  if (moreNewsBtn) {
    moreNewsBtn.addEventListener('click', () => {
      alert('More news functionality would be implemented here');
    });
  }

  // Add hover effects to news items
  const newsItems = document.querySelectorAll('.latest-news li');
  newsItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      alert('News article would open here');
    });
  });
});
