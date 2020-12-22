<script>

let a = 600851475143
let b = 1
let c = 0
let delitel=0
while (b < Math.sqrt(a)){
if (a%b===0){
for (let i=3; i<=Math.sqrt(b); i++){
if (b%i===0)
c=c+1
}
if (c<=0)
delitel=b
}
b++
}
alert(delitel)

</script>