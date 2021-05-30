# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\classes\extends-lefthandside\gen\new_arg
> :: test: new arg
> :: case: eval
## Input

`````js
new eval
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
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 134299649,
                    "text": "eval",
                    "rawText": "eval",
                    "flags": 96,
                    "start": 3,
                    "end": 8
                },
                "argumentList": null,
                "flags": 32,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "new eval",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

new  eval();
```

### Diagnostics

```javascript
✔ No errors
```

