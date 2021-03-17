# Kataw parser test case

## Input

`````js
do throw function(){}
while(y)
for(;;)x
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "do throw function(){}\nwhile(y)\nfor(;;)x",
    "filename": "",
    "statements": [
        {
            "kind": 2097218,
            "expression": {
                "kind": 196712,
                "text": "y",
                "rawText": "y",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 28,
                "end": 29
            },
            "statement": {
                "kind": 2097373,
                "expression": {
                    "kind": 8456285,
                    "name": null,
                    "formalParameters": {
                        "kind": 90,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 19
                    },
                    "contents": {
                        "kind": 91,
                        "functionStatementList": {
                            "kind": 94,
                            "statements": [],
                            "multiline": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 20
                        },
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 21
                    },
                    "typeParameters": null,
                    "type": null,
                    "flags": 32768,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 21
                },
                "flags": 32768,
                "symbol": null,
                "transformFlags": 0,
                "start": 2,
                "end": 21
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 30
        },
        {
            "kind": 2099288,
            "initializer": null,
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 39
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 38,
                "end": 39
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 30,
            "end": 39
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

