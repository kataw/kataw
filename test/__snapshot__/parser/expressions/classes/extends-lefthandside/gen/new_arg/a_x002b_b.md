# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\classes\extends-lefthandside\gen\new_arg
> :: test: new arg
> :: case: a + b
## Input

`````js
new a + b
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
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 96,
                        "start": 0,
                        "end": 3
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 3,
                        "end": 5
                    },
                    "argumentList": null,
                    "flags": 32,
                    "start": 0,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 99634,
                    "flags": 64,
                    "start": 5,
                    "end": 7
                },
                "right": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "start": 7,
                    "end": 9
                },
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "new a + b",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

new  a() + b;
```

### Diagnostics

```javascript
✔ No errors
```

