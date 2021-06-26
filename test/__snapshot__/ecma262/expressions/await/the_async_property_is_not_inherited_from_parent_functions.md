# Kataw parser test case

## Input

`````js
async function f(){ let y = x => await x; }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 5,
                "end": 14
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 16
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 80,
                                "start": 19,
                                "end": 23
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 23,
                                            "end": 25
                                        },
                                        "type": null,
                                        "initializer": {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 27,
                                                "end": 29
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "start": 29,
                                                "end": 32
                                            },
                                            "contents": {
                                                "kind": 134299649,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 96,
                                                "start": 32,
                                                "end": 38
                                            },
                                            "flags": 32,
                                            "start": 27,
                                            "end": 38
                                        },
                                        "flags": 16,
                                        "start": 23,
                                        "end": 38
                                    },
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 38,
                                            "end": 40
                                        },
                                        "type": null,
                                        "initializer": null,
                                        "flags": 16,
                                        "start": 38,
                                        "end": 40
                                    }
                                ],
                                "flags": 16,
                                "start": 23,
                                "end": 40
                            },
                            "flags": 33554448,
                            "start": 19,
                            "end": 41
                        }
                    ],
                    "flags": 32,
                    "start": 19,
                    "end": 41
                },
                "flags": 32,
                "start": 18,
                "end": 43
            },
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "async function f(){ let y = x => await x; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 38, end: 40

```

