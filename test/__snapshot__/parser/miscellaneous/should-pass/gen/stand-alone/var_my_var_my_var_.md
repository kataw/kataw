# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\stand-alone
> :: test: stand-alone
> :: case: var my_var; my_var;
## Input

`````js
var my_var; my_var;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "my_var",
                            "rawText": "my_var",
                            "flags": 96,
                            "start": 3,
                            "end": 10
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 10
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "my_var",
                "rawText": "my_var",
                "flags": 96,
                "start": 11,
                "end": 18
            },
            "flags": 16,
            "start": 11,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "var my_var; my_var;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

var my_var;
my_var;
```

### Diagnostics

```javascript
✔ No errors
```

