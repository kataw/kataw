# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\stand-alone
> :: test: stand-alone
> :: case: for (let x = 42 in list) process(x);
## Input

`````js
for (let x = 42 in list) process(x);
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 8,
                            "end": 10
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 42,
                            "rawText": "42",
                            "flags": 96,
                            "start": 12,
                            "end": 15
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 15
                    }
                ],
                "flags": 16777232,
                "start": 8,
                "end": 15
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 15,
                "end": 18
            },
            "expression": {
                "kind": 134299649,
                "text": "list",
                "rawText": "list",
                "flags": 96,
                "start": 18,
                "end": 23
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "process",
                        "rawText": "process",
                        "flags": 96,
                        "start": 24,
                        "end": 32
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 33,
                                "end": 34
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 33,
                        "end": 34
                    },
                    "flags": 268435488,
                    "start": 24,
                    "end": 35
                },
                "flags": 16,
                "start": 24,
                "end": 36
            },
            "flags": 80,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "for (let x = 42 in list) process(x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The lexical declaration of a 'for...in or of' statement cannot have an initializer. - start: 8, end: 15

```

