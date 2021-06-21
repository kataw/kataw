# Kataw parser test case

## Input

`````js
class f { }

f += '';
f += 1;
f -= 1;
f *= 1;
f /= 1;
f %= 1;
f &= 1;
f |= 1;
f <<= 1;
f >>= 1;
f >>>= 1;
f ^= 1;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "start": 9,
                    "end": 9
                },
                "flags": 7,
                "start": 32,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 11,
                    "end": 14
                },
                "operatorToken": {
                    "kind": 4130,
                    "flags": 96,
                    "start": 14,
                    "end": 17
                },
                "right": {
                    "kind": 201392131,
                    "text": "",
                    "rawText": "''",
                    "flags": 4194400,
                    "start": 17,
                    "end": 20
                },
                "flags": 32,
                "start": 11,
                "end": 20
            },
            "flags": 16,
            "start": 11,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 21,
                    "end": 23
                },
                "operatorToken": {
                    "kind": 4130,
                    "flags": 96,
                    "start": 23,
                    "end": 26
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 26,
                    "end": 28
                },
                "flags": 32,
                "start": 21,
                "end": 28
            },
            "flags": 16,
            "start": 21,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 29,
                    "end": 31
                },
                "operatorToken": {
                    "kind": 4131,
                    "flags": 96,
                    "start": 31,
                    "end": 34
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 34,
                    "end": 36
                },
                "flags": 32,
                "start": 29,
                "end": 36
            },
            "flags": 16,
            "start": 29,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 37,
                    "end": 39
                },
                "operatorToken": {
                    "kind": 4132,
                    "flags": 96,
                    "start": 39,
                    "end": 42
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 42,
                    "end": 44
                },
                "flags": 32,
                "start": 37,
                "end": 44
            },
            "flags": 16,
            "start": 37,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 45,
                    "end": 47
                },
                "operatorToken": {
                    "kind": 4133,
                    "flags": 96,
                    "start": 47,
                    "end": 50
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 50,
                    "end": 52
                },
                "flags": 32,
                "start": 45,
                "end": 52
            },
            "flags": 16,
            "start": 45,
            "end": 53
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 53,
                    "end": 55
                },
                "operatorToken": {
                    "kind": 4134,
                    "flags": 96,
                    "start": 55,
                    "end": 58
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 58,
                    "end": 60
                },
                "flags": 32,
                "start": 53,
                "end": 60
            },
            "flags": 16,
            "start": 53,
            "end": 61
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 61,
                    "end": 63
                },
                "operatorToken": {
                    "kind": 4137,
                    "flags": 96,
                    "start": 63,
                    "end": 66
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 66,
                    "end": 68
                },
                "flags": 32,
                "start": 61,
                "end": 68
            },
            "flags": 16,
            "start": 61,
            "end": 69
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 69,
                    "end": 71
                },
                "operatorToken": {
                    "kind": 4136,
                    "flags": 96,
                    "start": 71,
                    "end": 74
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 74,
                    "end": 76
                },
                "flags": 32,
                "start": 69,
                "end": 76
            },
            "flags": 16,
            "start": 69,
            "end": 77
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 77,
                    "end": 79
                },
                "operatorToken": {
                    "kind": 4126,
                    "flags": 96,
                    "start": 79,
                    "end": 83
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 83,
                    "end": 85
                },
                "flags": 32,
                "start": 77,
                "end": 85
            },
            "flags": 16,
            "start": 77,
            "end": 86
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 86,
                    "end": 88
                },
                "operatorToken": {
                    "kind": 4127,
                    "flags": 96,
                    "start": 88,
                    "end": 92
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 92,
                    "end": 94
                },
                "flags": 32,
                "start": 86,
                "end": 94
            },
            "flags": 16,
            "start": 86,
            "end": 95
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 95,
                    "end": 97
                },
                "operatorToken": {
                    "kind": 4128,
                    "flags": 96,
                    "start": 97,
                    "end": 102
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 102,
                    "end": 104
                },
                "flags": 32,
                "start": 95,
                "end": 104
            },
            "flags": 16,
            "start": 95,
            "end": 105
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 105,
                    "end": 107
                },
                "operatorToken": {
                    "kind": 4135,
                    "flags": 96,
                    "start": 107,
                    "end": 110
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 110,
                    "end": 112
                },
                "flags": 32,
                "start": 105,
                "end": 112
            },
            "flags": 16,
            "start": 105,
            "end": 113
        }
    ],
    "isModule": false,
    "source": "class f { }\n\nf += '';\nf += 1;\nf -= 1;\nf *= 1;\nf /= 1;\nf %= 1;\nf &= 1;\nf |= 1;\nf <<= 1;\nf >>= 1;\nf >>>= 1;\nf ^= 1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 113
}
```

### Printed

```javascript

 class f {
}, f+='';, f+=1;, f-=1;, f*=1;, f/=1;, f%=1;, f&=1;, f|=1;, f<<=1;, f>>=1;, f>>>=1;, f^=1; 
```

### Diagnostics

```javascript
✔ No errors
```

