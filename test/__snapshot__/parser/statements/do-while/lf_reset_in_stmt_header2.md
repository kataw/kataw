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
                "flags": 768,
                "start": 26,
                "end": 27
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 19,
                "start": 1,
                "end": 25
            },
            "statement": {
                "kind": 164,
                "ifKeyword": {
                    "kind": 37757019,
                    "flags": 2,
                    "start": 0,
                    "end": 5
                },
                "expression": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 7,
                        "start": 0,
                        "end": 9
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
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
                            "multiline": false,
                            "flags": 256,
                            "start": 10,
                            "end": 10
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 11
                    },
                    "flags": 256,
                    "start": 6,
                    "end": 11
                },
                "consequent": {
                    "kind": 168,
                    "flags": 128,
                    "start": 12,
                    "end": 13
                },
                "elseKeyword": {
                    "kind": 4194389,
                    "flags": 13,
                    "start": 512,
                    "end": 17
                },
                "alternate": {
                    "kind": 120,
                    "expression": {
                        "kind": 134299649,
                        "text": "n",
                        "rawText": "n",
                        "flags": 768,
                        "start": 17,
                        "end": 19
                    },
                    "flags": 128,
                    "start": 17,
                    "end": 19
                },
                "flags": 128,
                "start": 2,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "do if(x=>{});else n\nwhile(y",
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

