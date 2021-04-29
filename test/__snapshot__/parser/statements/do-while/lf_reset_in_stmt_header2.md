# Kataw parser test case

## Input

`````js
do if(x=>{});else n
while(y
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 26,
                "end": 27
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 1,
                "start": 19,
                "end": 25
            },
            "statement": {
                "kind": 164,
                "ifKeyword": {
                    "kind": 37757019,
                    "flags": 0,
                    "start": 2,
                    "end": 5
                },
                "expression": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 7,
                        "end": 9
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 6,
                        "end": 7
                    },
                    "asyncToken": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 10,
                            "end": 10
                        },
                        "flags": 32,
                        "start": 9,
                        "end": 11
                    },
                    "flags": 32,
                    "start": 6,
                    "end": 11
                },
                "consequent": {
                    "kind": 168,
                    "flags": 16,
                    "start": 12,
                    "end": 13
                },
                "elseKeyword": {
                    "kind": 4194389,
                    "flags": 64,
                    "start": 13,
                    "end": 17
                },
                "alternate": {
                    "kind": 120,
                    "expression": {
                        "kind": 134299649,
                        "text": "n",
                        "rawText": "n",
                        "flags": 96,
                        "start": 17,
                        "end": 19
                    },
                    "flags": 16,
                    "start": 17,
                    "end": 19
                },
                "flags": 16,
                "start": 2,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "do if(x=>{});else n\nwhile(y",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

