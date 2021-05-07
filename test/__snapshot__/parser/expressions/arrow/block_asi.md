# Kataw parser test case

## Input

`````js
()=>{}
{x}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 2,
                    "end": 4
                },
                "typeParameters": null,
                "parameters": [],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 5,
                        "end": 5
                    },
                    "flags": 32,
                    "start": 4,
                    "end": 6
                },
                "flags": 32,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 8,
                            "end": 9
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 9
                    }
                ],
                "flags": 16,
                "start": 8,
                "end": 9
            },
            "flags": 16,
            "start": 6,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "()=>{}\n{x}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

() =>  {};
{
  x;
}
```

### Diagnostics

```javascript
✔ No errors
```

