# Kataw parser test case

## Input

`````js
do
  if(x=>{});
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
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 22,
                "end": 23
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 1,
                "start": 15,
                "end": 21
            },
            "statement": {
                "kind": 164,
                "ifKeyword": {
                    "kind": 37757019,
                    "flags": 1,
                    "start": 2,
                    "end": 7
                },
                "expression": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 0,
                        "start": 9,
                        "end": 11
                    },
                    "typeParameters": null,
                    "parameters": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 8,
                        "end": 9
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
                            "start": 12,
                            "end": 12
                        },
                        "flags": 32,
                        "start": 11,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 13
                },
                "consequent": {
                    "kind": 168,
                    "flags": 16,
                    "start": 14,
                    "end": 15
                },
                "elseKeyword": null,
                "alternate": null,
                "flags": 16,
                "start": 2,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "do\n  if(x=>{});\nwhile(y)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
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

