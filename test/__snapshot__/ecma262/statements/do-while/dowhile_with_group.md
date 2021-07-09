# Kataw parser test case

## Input

`````js
do
  (function(){})
while(y)
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 177,
                        "asyncKeyword": null,
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 14
                        },
                        "asteriskToken": null,
                        "name": null,
                        "typeParameters": null,
                        "formalParameterList": {
                            "kind": 214,
                            "formalParameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 15,
                            "end": 15
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 17
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 18
                        },
                        "returnType": null,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 18
                    },
                    "flags": 2,
                    "transformFlags": 0,
                    "start": 33,
                    "end": 19
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 2,
                "end": 19
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 81,
                "transformFlags": 0,
                "start": 19,
                "end": 25
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "transformFlags": 0,
                "start": 26,
                "end": 27
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "do\n  (function(){})\nwhile(y)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
do  (function () {});
while (y);
```

### Diagnostics

```javascript
✔ No errors
```

