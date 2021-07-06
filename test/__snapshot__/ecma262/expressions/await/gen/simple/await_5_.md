# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/simple
> :: test: simple
> :: case: await 5;
## Options

`````js
{}
`````
## Input

`````js
await 5;
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
                "kind": 134299649,
                "text": "await",
                "rawText": "await",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 5,
                "rawText": "5",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 5,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "await 5;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 5, end: 7

```

