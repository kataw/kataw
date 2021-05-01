# Kataw parser test case

## Input

`````js
async function f(){
  for await ([{x=y}]=x of x) ;
}
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### Hybrid CST

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
                "flags": 0,
                "start": 5,
                "end": 14
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 14,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
            },
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
                                "start": 19,
                                "end": 25
                            },
                            "ofKeyword": {
                                "kind": 16793717,
                                "flags": 0,
                                "start": 42,
                                "end": 45
                            },
                            "initializer": {
                                "kind": 125,
                                "left": {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [
                                                        {
                                                            "kind": 205,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 35,
                                                                "end": 36
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "start": 37,
                                                                "end": 38
                                                            },
                                                            "flags": 32,
                                                            "start": 35,
                                                            "end": 38
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 16,
                                                    "start": 35,
                                                    "end": 38
                                                },
                                                "flags": 32,
                                                "start": 34,
                                                "end": 39
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 34,
                                        "end": 39
                                    },
                                    "flags": 32,
                                    "start": 33,
                                    "end": 40
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 40,
                                    "end": 41
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 41,
                                    "end": 42
                                },
                                "flags": 32,
                                "start": 33,
                                "end": 42
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 45,
                                "end": 47
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 48,
                                "end": 50
                            },
                            "awaitKeyword": {
                                "kind": 82032,
                                "flags": 64,
                                "start": 25,
                                "end": 31
                            },
                            "flags": 16,
                            "start": 19,
                            "end": 50
                        }
                    ],
                    "flags": 33,
                    "start": 19,
                    "end": 50
                },
                "flags": 32,
                "start": 18,
                "end": 52
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "async function f(){\n  for await ([{x=y}]=x of x) ;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 52
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

