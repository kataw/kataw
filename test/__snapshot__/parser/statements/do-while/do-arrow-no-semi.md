# Kataw parser test case

## Input

`````js
do x=>{}
while(y)
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 4,
                        "end": 6
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 2,
                        "end": 4
                    },
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 7,
                            "end": 7
                        },
                        "flags": 32,
                        "start": 6,
                        "end": 8
                    },
                    "flags": 32,
                    "start": 2,
                    "end": 8
                },
                "flags": 16,
                "start": 2,
                "end": 8
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 65,
                "start": 8,
                "end": 14
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 15,
                "end": 16
            },
            "flags": 80,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "do x=>{}\nwhile(y)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

do x =>  {};
while (y);
```

### Diagnostics

```javascript
✔ No errors
```

