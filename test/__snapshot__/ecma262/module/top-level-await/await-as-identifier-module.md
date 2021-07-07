# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
// this should fail

await;

await = yield;

await(x);
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
                    "flags": 65,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 26
                },
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 26
                },
                "flags": 32,
                "transformFlags": 4096,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 208,
                    "awaitKeyword": {
                        "kind": 82196,
                        "flags": 65,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 34
                    },
                    "expression": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 34
                    },
                    "flags": 32,
                    "transformFlags": 4096,
                    "start": 27,
                    "end": 34
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 36
                },
                "right": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 36,
                    "end": 42
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 27,
                "end": 42
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 27,
            "end": 43
        },
        {
            "kind": 120,
            "expression": {
                "kind": 208,
                "awaitKeyword": {
                    "kind": 82196,
                    "flags": 65,
                    "transformFlags": 0,
                    "start": 43,
                    "end": 50
                },
                "expression": {
                    "kind": 121,
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 51,
                        "end": 52
                    },
                    "flags": 50,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 53
                },
                "flags": 32,
                "transformFlags": 4096,
                "start": 43,
                "end": 53
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 43,
            "end": 54
        }
    ],
    "isModule": true,
    "source": "// this should fail\n\nawait;\n\nawait = yield;\n\nawait(x);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 54
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 26, end: 27
✖ Identifier expected - start: 34, end: 36
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 34, end: 36

```

