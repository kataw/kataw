# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/expressions/await/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\await\gen\simple
> :: test: simple
> :: case: async(await);
## Input

`````js
async(await);
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 0,
                "end": 5
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "await",
                        "rawText": "await",
                        "flags": 96,
                        "start": 6,
                        "end": 11
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 0,
                "end": 0
            },
            "flags": 268435488,
            "start": 0,
            "end": 12
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 12,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "async(await);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

async(await)

```

### Diagnostics

```javascript
✔ No errors
```

