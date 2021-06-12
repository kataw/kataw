# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\stand-alone
> :: test: stand-alone
> :: case: var {__proto__: a, __proto__: b} = {};
## Input

`````js
var {__proto__: a, __proto__: b} = {};
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
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "__proto__",
                                            "rawText": "__proto__",
                                            "flags": 96,
                                            "start": 5,
                                            "end": 14
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 15,
                                            "end": 17
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 5,
                                        "end": 17
                                    },
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "__proto__",
                                            "rawText": "__proto__",
                                            "flags": 96,
                                            "start": 18,
                                            "end": 28
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 29,
                                            "end": 31
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 18,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 5,
                                "end": 31
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 32
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 36,
                                "end": 36
                            },
                            "flags": 48,
                            "start": 34,
                            "end": 37
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 37
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 37
            },
            "flags": 16,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "var {__proto__: a, __proto__: b} = {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

var {
  __proto__: a,
  __proto__: b
} = {};
```

### Diagnostics

```javascript
✔ No errors
```

