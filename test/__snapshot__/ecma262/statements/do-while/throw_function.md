# Kataw parser test case

## Input

`````js
do throw function(){}
while(y)
for(;;)x
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
                "kind": 158,
                "throwKeyword": {
                    "kind": 37757026,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 8
                },
                "expression": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 17
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
                        "start": 18,
                        "end": 18
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 20
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 19,
                        "end": 21
                    },
                    "returnType": null,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 21
                },
                "flags": 80,
                "transformFlags": 0,
                "start": 2,
                "end": 21
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 81,
                "transformFlags": 0,
                "start": 21,
                "end": 27
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "transformFlags": 0,
                "start": 28,
                "end": 29
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 30
        },
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 81,
                "transformFlags": 0,
                "start": 30,
                "end": 34
            },
            "initializer": null,
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 39
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 38,
                "end": 39
            },
            "flags": 81,
            "transformFlags": 0,
            "start": 30,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "do throw function(){}\nwhile(y)\nfor(;;)x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
do  throw function () {};
while (y);
for (;;)
  x;

```

### Diagnostics

```javascript
✔ No errors
```

