# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\classes\extends-lefthandside\gen\new_arg
> :: test: new arg
> :: case: {bar}
## Input

`````js
new {bar}
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
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 5,
                                "end": 8
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 5,
                        "end": 8
                    },
                    "flags": 48,
                    "start": 3,
                    "end": 9
                },
                "argumentList": null,
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
    "source": "new {bar}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

new  { bar }();
```

### Diagnostics

```javascript
✔ No errors
```

