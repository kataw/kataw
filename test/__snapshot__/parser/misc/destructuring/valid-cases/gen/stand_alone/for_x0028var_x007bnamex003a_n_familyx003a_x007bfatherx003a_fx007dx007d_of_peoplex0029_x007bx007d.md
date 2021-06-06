# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/misc/destructuring/valid-cases/autogen.md
- Path: kataw8/test\__snapshot__\parser\misc\destructuring\valid-cases\gen\stand_alone
> :: test: stand alone
> :: case: for (var {name: n, family: {father: f}} of people) {}
## Input

`````js
for (var {name: n, family: {father: f}} of people) {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "awaitKeyword": null,
            "initializer": {
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
                                            "text": "name",
                                            "rawText": "name",
                                            "flags": 96,
                                            "start": 10,
                                            "end": 14
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "n",
                                            "rawText": "n",
                                            "flags": 96,
                                            "start": 15,
                                            "end": 17
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 10,
                                        "end": 17
                                    },
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "family",
                                            "rawText": "family",
                                            "flags": 96,
                                            "start": 18,
                                            "end": 25
                                        },
                                        "value": {
                                            "kind": 212,
                                            "propertyList": {
                                                "kind": 213,
                                                "properties": [
                                                    {
                                                        "kind": 204,
                                                        "ellipsisToken": null,
                                                        "key": {
                                                            "kind": 134299649,
                                                            "text": "father",
                                                            "rawText": "father",
                                                            "flags": 96,
                                                            "start": 28,
                                                            "end": 34
                                                        },
                                                        "value": {
                                                            "kind": 134299649,
                                                            "text": "f",
                                                            "rawText": "f",
                                                            "flags": 96,
                                                            "start": 35,
                                                            "end": 37
                                                        },
                                                        "initializer": null,
                                                        "flags": 32,
                                                        "start": 28,
                                                        "end": 37
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 28,
                                                "end": 37
                                            },
                                            "flags": 32,
                                            "start": 26,
                                            "end": 38
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 18,
                                        "end": 38
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 10,
                                "end": 38
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 39
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 8,
                        "end": 39
                    }
                ],
                "flags": 16,
                "start": 8,
                "end": 39
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 39,
                "end": 42
            },
            "expression": {
                "kind": 134299649,
                "text": "people",
                "rawText": "people",
                "flags": 96,
                "start": 42,
                "end": 49
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 52,
                    "end": 52
                },
                "flags": 16,
                "start": 50,
                "end": 53
            },
            "flags": 16,
            "start": 0,
            "end": 53
        }
    ],
    "isModule": false,
    "source": "for (var {name: n, family: {father: f}} of people) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 53
}
```

### Printed

```javascript

for ( of people)
  {
  }
```

### Diagnostics

```javascript
✔ No errors
```

