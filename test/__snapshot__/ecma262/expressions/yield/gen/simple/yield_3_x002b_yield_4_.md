# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/simple
> :: test: simple
> :: case: yield 3 + yield 4;
## Options

`````js
{}
`````
## Input

`````js
yield 3 + yield 4;
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
                "text": "yield",
                "rawText": "yield",
                "flags": 96,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 201392130,
                    "text": 3,
                    "rawText": "3",
                    "flags": 96,
                    "start": 5,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 96,
                    "start": 7,
                    "end": 9
                },
                "right": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "start": 9,
                    "end": 15
                },
                "flags": 96,
                "start": 5,
                "end": 15
            },
            "flags": 16,
            "start": 5,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 4,
                "rawText": "4",
                "flags": 96,
                "start": 15,
                "end": 17
            },
            "flags": 16,
            "start": 15,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "yield 3 + yield 4;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 5, end: 7
✖ Expected a `;` - start: 15, end: 17

```

