# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/position/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/position/gen/plus_is_unary
> :: test: plus is unary
> :: case: x => ok
## Options

`````js
{}
`````
## Input

`````js
x => ok
+ x
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
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1,
                    "end": 4
                },
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "ok",
                        "rawText": "ok",
                        "flags": 96,
                        "start": 4,
                        "end": 7
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 97,
                        "start": 7,
                        "end": 9
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 9,
                        "end": 11
                    },
                    "flags": 97,
                    "start": 4,
                    "end": 11
                },
                "flags": 32,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "x => ok\n+ x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

x => ok +  x;
```

### Diagnostics

```javascript
✔ No errors
```

