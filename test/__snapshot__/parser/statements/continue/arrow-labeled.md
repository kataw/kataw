# Kataw parser test case

## Input

`````js
() => { do        continue y   ; while(true);}
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
                    "flags": 64,
                    "start": 2,
                    "end": 5
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
                        "statements": [
                            {
                                "kind": 169,
                                "doKeyword": {
                                    "kind": 4202580,
                                    "flags": 80,
                                    "start": 7,
                                    "end": 10
                                },
                                "expression": {
                                    "kind": 24752947,
                                    "flags": 96,
                                    "start": 39,
                                    "end": 43
                                },
                                "whileKeyword": {
                                    "kind": 37757028,
                                    "flags": 64,
                                    "start": 32,
                                    "end": 38
                                },
                                "statement": {
                                    "kind": 172,
                                    "continueKeyword": {
                                        "kind": 37757009,
                                        "flags": 80,
                                        "start": 10,
                                        "end": 26
                                    },
                                    "label": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 26,
                                        "end": 28
                                    },
                                    "flags": 16,
                                    "start": 10,
                                    "end": 32
                                },
                                "flags": 80,
                                "start": 7,
                                "end": 45
                            }
                        ],
                        "flags": 32,
                        "start": 7,
                        "end": 45
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 46
                },
                "flags": 32,
                "start": 0,
                "end": 46
            },
            "flags": 16,
            "start": 0,
            "end": 46
        }
    ],
    "isModule": false,
    "source": "() => { do        continue y   ; while(true);}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A 'continue' statement can only jump to a label of an enclosing iteration statement. - start: 10, end: 32

```

