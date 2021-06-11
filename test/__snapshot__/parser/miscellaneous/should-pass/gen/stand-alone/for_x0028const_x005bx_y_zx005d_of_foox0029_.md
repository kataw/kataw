# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: for (const [x,y,z] of foo);
## Options

`````js
{}
`````
## Input

`````js
for (const [x,y,z] of foo);
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
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 12,
                                        "end": 13
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 14,
                                        "end": 15
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 16,
                                        "end": 17
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 12,
                                "end": 17
                            },
                            "flags": 32,
                            "start": 10,
                            "end": 18
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 10,
                        "end": 18
                    }
                ],
                "flags": 16777232,
                "start": 10,
                "end": 18
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 18,
                "end": 21
            },
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 21,
                "end": 25
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 26,
                "end": 27
            },
            "flags": 80,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "for (const [x,y,z] of foo);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

for (const of foo);
```

### Diagnostics

```javascript
✔ No errors
```

