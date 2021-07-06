# Kataw parser test case

## Input

`````js
do if(x=>{});else n
while(y
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
                "kind": 164,
                "ifKeyword": {
                    "kind": 37757019,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 5
                },
                "expression": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 7
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 9
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 10
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 11
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 11
                },
                "consequent": {
                    "kind": 168,
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 13
                },
                "elseKeyword": {
                    "kind": 4194389,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 17
                },
                "alternate": {
                    "kind": 120,
                    "expression": {
                        "kind": 134299649,
                        "text": "n",
                        "rawText": "n",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 19
                    },
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 19
                },
                "flags": 80,
                "transformFlags": 0,
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
            "end": 27
        }
    ],
    "isModule": false,
    "source": "do if(x=>{});else n\nwhile(y",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 26, end: 27

```

