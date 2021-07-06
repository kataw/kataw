# Kataw parser test case

## Input

`````js
// kataw-ignore
      new async function() { await 0 }.x
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
                "kind": 129,
                "member": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 67108961,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 25
                    },
                    "expression": {
                        "kind": 177,
                        "asyncKeyword": {
                            "kind": 82031,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 31
                        },
                        "functionKeyword": {
                            "kind": 37822554,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 31,
                            "end": 40
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
                            "start": 41,
                            "end": 41
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 208,
                                            "awaitKeyword": {
                                                "kind": 82196,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 44,
                                                "end": 50
                                            },
                                            "expression": {
                                                "kind": 201392130,
                                                "text": 0,
                                                "rawText": "0",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 50,
                                                "end": 52
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 44,
                                            "end": 52
                                        },
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 44,
                                        "end": 52
                                    }
                                ],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 52
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 42,
                            "end": 54
                        },
                        "returnType": null,
                        "flags": 160,
                        "transformFlags": 0,
                        "start": 25,
                        "end": 54
                    },
                    "argumentList": null,
                    "flags": 67108961,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 54
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 55,
                    "end": 56
                },
                "flags": 67108961,
                "transformFlags": 2,
                "start": 0,
                "end": 56
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "// kataw-ignore\n      new async function() { await 0 }.x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript
// kataw-ignore
      new async function() { await 0 }.x;
```

### Diagnostics

```javascript
✔ No errors
```

