# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
await new Promise(function(res, rej) { res(1); });
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
                "kind": 208,
                "awaitKeyword": {
                    "kind": 82196,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "expression": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 9
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "Promise",
                        "rawText": "Promise",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 9,
                        "end": 17
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 177,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 26
                                },
                                "asteriskToken": null,
                                "name": null,
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "res",
                                            "rawText": "res",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 27,
                                            "end": 30
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "rej",
                                            "rawText": "rej",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 31,
                                            "end": 35
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 35
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
                                                    "kind": 131,
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "res",
                                                        "rawText": "res",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 38,
                                                        "end": 42
                                                    },
                                                    "argumentList": {
                                                        "kind": 256,
                                                        "elements": [
                                                            {
                                                                "kind": 201392130,
                                                                "text": 1,
                                                                "rawText": "1",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 43,
                                                                "end": 44
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 43,
                                                        "end": 44
                                                    },
                                                    "flags": 268435488,
                                                    "transformFlags": 1,
                                                    "start": 38,
                                                    "end": 45
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 38,
                                                "end": 46
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 38,
                                        "end": 46
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 36,
                                    "end": 48
                                },
                                "returnType": null,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 48
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 48
                    },
                    "flags": 96,
                    "transformFlags": 2048,
                    "start": 5,
                    "end": 49
                },
                "flags": 32,
                "transformFlags": 4096,
                "start": 0,
                "end": 49
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": true,
    "source": "await new Promise(function(res, rej) { res(1); });",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
await new Promise(function (res, rej) {
  res(1);
});
```

### Diagnostics

```javascript
✔ No errors
```

