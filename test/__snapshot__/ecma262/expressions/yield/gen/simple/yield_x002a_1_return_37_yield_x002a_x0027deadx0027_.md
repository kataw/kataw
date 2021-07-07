# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/simple
> :: test: simple
> :: case: yield * 1; return 37; yield * 'dead';
## Options

`````js
{}
`````
## Input

`````js
yield * 1; return 37; yield * 'dead';
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
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 96,
                    "transformFlags": 32,
                    "start": 5,
                    "end": 7
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 9
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 10
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 80,
                "transformFlags": 0,
                "start": 10,
                "end": 17
            },
            "expression": {
                "kind": 201392130,
                "text": 37,
                "rawText": "37",
                "flags": 96,
                "transformFlags": 0,
                "start": 17,
                "end": 20
            },
            "flags": 80,
            "transformFlags": 256,
            "start": 10,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 27
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 96,
                    "transformFlags": 32,
                    "start": 27,
                    "end": 29
                },
                "right": {
                    "kind": 201392131,
                    "text": "dead",
                    "rawText": "'dead'",
                    "flags": 4194400,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 36
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 21,
                "end": 36
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 21,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "yield * 1; return 37; yield * 'dead';",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 10, end: 17

```

