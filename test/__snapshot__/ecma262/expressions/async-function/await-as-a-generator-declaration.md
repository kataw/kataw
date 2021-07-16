# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: false }
`````

## Input

`````js
(async function* await() {})
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
                "kind": 121,
                "expression": {
                    "kind": 177,
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 6
                    },
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 15
                    },
                    "asteriskToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 16
                    },
                    "name": {
                        "kind": 134299649,
                        "text": "await",
                        "rawText": "await",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 22
                    },
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 23,
                        "end": 23
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 26,
                            "end": 26
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 24,
                        "end": 27
                    },
                    "returnType": null,
                    "flags": 416,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 27
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "(async function* await() {})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot use 'await' as a name on a async generator expression - start: 16, end: 22

```

