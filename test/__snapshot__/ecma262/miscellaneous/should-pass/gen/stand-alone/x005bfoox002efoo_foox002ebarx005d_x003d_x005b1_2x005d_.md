# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: [foo.foo, foo.bar] = [1, 2];
## Options

`````js
{}
`````
## Input

`````js
[foo.foo, foo.bar] = [1, 2];
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
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 1,
                                    "end": 4
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 5,
                                    "end": 8
                                },
                                "flags": 96,
                                "start": 1,
                                "end": 8
                            },
                            {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 13
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 17
                                },
                                "flags": 96,
                                "start": 9,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 18
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 18,
                    "end": 20
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 22,
                                "end": 23
                            },
                            {
                                "kind": 201392130,
                                "text": 2,
                                "rawText": "2",
                                "flags": 96,
                                "start": 24,
                                "end": 26
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 22,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 20,
                    "end": 27
                },
                "flags": 32,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "[foo.foo, foo.bar] = [1, 2];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  [foo.foo, foo.bar,] = [1, 2,];

```

### Diagnostics

```javascript
✔ No errors
```

