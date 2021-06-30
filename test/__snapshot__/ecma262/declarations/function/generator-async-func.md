# Kataw parser test case

## Input

`````js
function* wrap() {
    async(a = yield b)
};
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "wrap",
                "rawText": "wrap",
                "flags": 96,
                "start": 9,
                "end": 14
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "start": 15,
                "end": 15
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "async",
                                "rawText": "async",
                                "flags": 96,
                                "start": 18,
                                "end": 28
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 125,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 29,
                                            "end": 30
                                        },
                                        "operatorToken": {
                                            "kind": 4125,
                                            "flags": 96,
                                            "start": 30,
                                            "end": 32
                                        },
                                        "right": {
                                            "kind": 229,
                                            "yieldKeyword": {
                                                "kind": 8454253,
                                                "flags": 64,
                                                "start": 32,
                                                "end": 38
                                            },
                                            "delegate": false,
                                            "asteriskToken": null,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 38,
                                                "end": 40
                                            },
                                            "flags": 32,
                                            "start": 32,
                                            "end": 40
                                        },
                                        "flags": 32,
                                        "start": 29,
                                        "end": 40
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 18,
                                "end": 18
                            },
                            "flags": 268435490,
                            "start": 18,
                            "end": 41
                        }
                    ],
                    "flags": 33,
                    "start": 18,
                    "end": 41
                },
                "flags": 32,
                "start": 16,
                "end": 43
            },
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 43
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 43,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "function* wrap() {\n    async(a = yield b)\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

function* wrap() {
  async(a = yield b)
}
;

```

### Diagnostics

```javascript
✔ No errors
```

