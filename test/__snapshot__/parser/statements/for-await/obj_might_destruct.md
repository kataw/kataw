# Kataw parser test case

## Input

`````js
async function f(){
  for await ({x,...x}=x of x) ;
}
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
                "rawText": " f",
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
                                "start": 43,
                                "end": 46
                            },
                            "initializer": {
                                "kind": 125,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 34,
                                                "end": 35
                                            },
                                            {
                                                "kind": 224,
                                                "ellipsisToken": {
                                                    "kind": 524302,
                                                    "flags": 0,
                                                    "start": 36,
                                                    "end": 39
                                                },
                                                "argument": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 39,
                                                    "end": 40
                                                },
                                                "flags": 32,
                                                "start": 36,
                                                "end": 40
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 34,
                                        "end": 40
                                    },
                                    "flags": 32,
                                    "start": 33,
                                    "end": 41
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 64,
                                    "start": 41,
                                    "end": 42
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 42,
                                    "end": 43
                                },
                                "flags": 32,
                                "start": 33,
                                "end": 43
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": " x",
                                "flags": 96,
                                "start": 46,
                                "end": 48
                            },
                            "statement": {
                                "kind": 168,
                                "flags": 16,
                                "start": 49,
                                "end": 51
                            },
                            "awaitKeyword": {
                                "kind": 82032,
                                "flags": 64,
                                "start": 25,
                                "end": 31
                            },
                            "flags": 16,
                            "start": 19,
                            "end": 51
                        }
                    ],
                    "flags": 33,
                    "start": 19,
                    "end": 51
                },
                "flags": 32,
                "start": 18,
                "end": 53
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "async function f(){\n  for await ({x,...x}=x of x) ;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
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

