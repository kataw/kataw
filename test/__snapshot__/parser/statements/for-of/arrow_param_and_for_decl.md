# Kataw parser test case

## Input

`````js
a => {
  for (let a of b) c
}
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
                    "start": 1,
                    "end": 4
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 167,
                                "forKeyword": {
                                    "kind": 37757017,
                                    "flags": 1,
                                    "start": 6,
                                    "end": 12
                                },
                                "ofKeyword": {
                                    "kind": 16793717,
                                    "flags": 64,
                                    "start": 19,
                                    "end": 22
                                },
                                "initializer": {
                                    "kind": 151,
                                    "bindingList": [
                                        {
                                            "kind": 190,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 17,
                                                "end": 19
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 16,
                                            "start": 17,
                                            "end": 19
                                        }
                                    ],
                                    "flags": 33554448,
                                    "start": 17,
                                    "end": 19
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 22,
                                    "end": 24
                                },
                                "statement": {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "c",
                                        "rawText": "c",
                                        "flags": 96,
                                        "start": 25,
                                        "end": 27
                                    },
                                    "flags": 16,
                                    "start": 25,
                                    "end": 27
                                },
                                "awaitKeyword": null,
                                "flags": 16,
                                "start": 6,
                                "end": 27
                            }
                        ],
                        "flags": 33,
                        "start": 6,
                        "end": 27
                    },
                    "flags": 32,
                    "start": 4,
                    "end": 29
                },
                "flags": 32,
                "start": 0,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "a => {\n  for (let a of b) c\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
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

