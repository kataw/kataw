# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: l
> :: test: arr tail
> :: case: async => {}
## Options

`````js
{}
`````
## Input

`````js
[async => {}].x
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
                "kind": 129,
                "member": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 271,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 1,
                                    "end": 6
                                },
                                "typeParameters": null,
                                "parameters": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "start": 1,
                                    "end": 6
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 6,
                                    "end": 9
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 11,
                                        "end": 11
                                    },
                                    "flags": 32,
                                    "start": 9,
                                    "end": 12
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 12
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 12
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 13
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 14,
                    "end": 15
                },
                "flags": 536870944,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "[async => {}].x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

 [async => {
    }].x; 
```

### Diagnostics

```javascript
✔ No errors
```

