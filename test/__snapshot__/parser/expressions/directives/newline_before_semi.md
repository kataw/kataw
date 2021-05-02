# Kataw parser test case

## Input

`````js
() => { "use strict"
;with (x) y; }
`````

## Output

### Hybrid CST

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
                    "end": 5
                },
                "typeParameters": null,
                "parameters": [],
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [
                            {
                                "kind": 201392131,
                                "text": "use strict",
                                "rawText": "\"use strict\"",
                                "flags": 96,
                                "start": 7,
                                "end": 20
                            }
                        ],
                        "statements": [
                            {
                                "kind": 153,
                                "withKeyword": {
                                    "kind": 37757029,
                                    "flags": 0,
                                    "start": 22,
                                    "end": 26
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 28,
                                    "end": 29
                                },
                                "statement": {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 30,
                                        "end": 32
                                    },
                                    "flags": 16,
                                    "start": 30,
                                    "end": 33
                                },
                                "flags": 16,
                                "start": 22,
                                "end": 33
                            }
                        ],
                        "flags": 32,
                        "start": 7,
                        "end": 33
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 35
                },
                "flags": 32,
                "start": 0,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "() => { \"use strict\"\n;with (x) y; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'with' statements are not allowed in strict mode. - start: 22, end: 26

```

