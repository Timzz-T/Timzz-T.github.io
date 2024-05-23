document.addEventListener("input", updateVars);


function updateVars() {
    updateTermAverage(1);
    updateTermAverage(2);
    updateTermAverage(3);
    updateOverallAverage();
    updateTotalAvg();
}

function updateTermAverage(term) {
    let div = 7;
    let total = 0;

    let subjects = ["mathsadv", "mathsext", "eng", "softeng", "phy", "chem", "inv"];
    
    subjects.forEach(subject => {
        let value = document.getElementById(`${subject}${term}`).value;
        if (value !== "") {
            total += parseFloat(value);
        } else {
            div--;
        }
    });

    let average = total / div
    document.getElementById(`average${term}`).innerHTML = average;
}

function updateOverallAverage() {
    let ovdiv = 3;
    let ovtotal = 0;
    let subjects = ["mathsadv", "mathsext", "eng", "softeng", "phy", "chem", "inv"];
    let terms = [1, 2, 3];

    subjects.forEach(subject => {
        ovtotal = 0;
        ovdiv = 3;
        terms.forEach(term => {
            let value = document.getElementById(`${subject}${term}`).value;
            if (value !== "") {
                ovtotal += parseFloat(value);
            } else {
                ovdiv--;
            }
        });
        let ovaverage = ovtotal / ovdiv;
        document.getElementById(subject).innerHTML = ovaverage;
    });
}


function updateTotalAvg() {
    let totavg = 0
    let totdiv = 3
    const terms = [1, 2, 3];

    terms.forEach(term => {
        let val = document.getElementById(`average${term}`).innerHTML;

        if (!isNaN(val)) {
            totavg += parseFloat(val)
        } else {
            totdiv--;
        }
    })


    let total = totavg/totdiv



    
    document.getElementById("average").innerHTML = total
}

const userdata = new Map();

function addUserData(userName, MAT1, MAT2, MAT3, MET1, MET2, MET3, ET1, ET2, ET3, SET1, SET2, SET3, PT1, PT2, PT3, CT1, CT2, CT3, IT1, IT2, IT3) {
    // Add the user's data to the Map
    userdata.set(userName, {
        MathsAdvT1: MAT1,
        MathsExtT1: MET1,
        EngT1: ET1,
        SoftEngT1: SET1,
        PhyT1: PT1,
        ChemT1: CT1,
        InvT1: IT1,
        MathsAdvT2: MAT2,
        MathsExtT2: MET2,
        EngT2: ET2,
        SoftEngT2: SET2,
        PhyT2: PT2,
        ChemT2: CT2,
        InvT2: IT2,
        MathsAdvT3: MAT3,
        MathsExtT3: MET3,
        EngT3: ET3,
        SoftEngT3: SET3,
        PhyT3: PT3,
        ChemT3: CT3,
        InvT3: IT3,
    });
}

function storebut() {
    let mathsadv1 = document.getElementById('mathsadv1').value;
    let mathsadv2 = document.getElementById('mathsadv2').value;
    let mathsadv3 = document.getElementById('mathsadv3').value;

    let mathsext1 = document.getElementById('mathsext1').value;
    let mathsext2 = document.getElementById('mathsext2').value;
    let mathsext3 = document.getElementById('mathsext3').value;

    let eng1 = document.getElementById('eng1').value;
    let eng2 = document.getElementById('eng2').value;
    let eng3 = document.getElementById('eng3').value;

    let softeng1 = document.getElementById('softeng1').value;
    let softeng2 = document.getElementById('softeng2').value;
    let softeng3 = document.getElementById('softeng3').value;

    let phy1 = document.getElementById('phy1').value;
    let phy2 = document.getElementById('phy2').value;
    let phy3 = document.getElementById('phy3').value;

    let chem1 = document.getElementById('chem1').value;
    let chem2 = document.getElementById('chem2').value;
    let chem3 = document.getElementById('chem3').value;

    let inv1 = document.getElementById('inv1').value;
    let inv2 = document.getElementById('inv2').value;
    let inv3 = document.getElementById('inv3').value;


    let username = document.getElementById("name").value
    addUserData(username,mathsadv1, mathsadv2, mathsadv3, mathsext1, mathsext2, mathsext3, eng1, eng2, eng3, softeng1, softeng2, softeng3, phy1, phy2, phy3, chem1, chem2, chem3, inv1, inv2, inv3)
    console.log(userdata)
}

function loadbut() {
    let username = document.getElementById("name").value


    let mathsadv1 = document.getElementById('mathsadv1');
    let mathsadv2 = document.getElementById('mathsadv2');
    let mathsadv3 = document.getElementById('mathsadv3');

    let mathsext1 = document.getElementById('mathsext1');
    let mathsext2 = document.getElementById('mathsext2');
    let mathsext3 = document.getElementById('mathsext3');

    let eng1 = document.getElementById('eng1');
    let eng2 = document.getElementById('eng2');
    let eng3 = document.getElementById('eng3');

    let softeng1 = document.getElementById('softeng1');
    let softeng2 = document.getElementById('softeng2');
    let softeng3 = document.getElementById('softeng3');

    let phy1 = document.getElementById('phy1');
    let phy2 = document.getElementById('phy2');
    let phy3 = document.getElementById('phy3');

    let chem1 = document.getElementById('chem1');
    let chem2 = document.getElementById('chem2');
    let chem3 = document.getElementById('chem3');

    let inv1 = document.getElementById('inv1');
    let inv2 = document.getElementById('inv2');
    let inv3 = document.getElementById('inv3');

    mathsadv1.value = userdata.get(username).MathsAdvT1;
    mathsadv2.value = userdata.get(username).MathsAdvT2;
    mathsadv3.value = userdata.get(username).MathsAdvT3;

    mathsext1.value = userdata.get(username).MathsExtT1;
    mathsext2.value = userdata.get(username).MathsExtT2;
    mathsext3.value = userdata.get(username).MathsExtT3;

    eng1.value = userdata.get(username).EngT1;
    eng2.value = userdata.get(username).EngT2;
    eng3.value = userdata.get(username).EngT3;

    softeng1.value = userdata.get(username).SoftEngT1;
    softeng2.value = userdata.get(username).SoftEngT2;
    softeng3.value = userdata.get(username).SoftEngT3;

    phy1.value = userdata.get(username).PhyT1;
    phy2.value = userdata.get(username).PhyT2;
    phy3.value = userdata.get(username).PhyT3;

    chem1.value = userdata.get(username).ChemT1;
    chem2.value = userdata.get(username).ChemT2;
    chem3.value = userdata.get(username).ChemT3;

    inv1.value = userdata.get(username).InvT1;
    inv2.value = userdata.get(username).InvT2;
    inv3.value = userdata.get(username).InvT3;

    updateVars();
}