# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression_paren
> :: case: await\n a
## Input

`````js
(class { await\n a });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 768,
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 768,
                                    "start": 8,
                                    "end": 14
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 8,
                                "end": 14
                            }
                        ],
                        "flags": 256,
                        "start": 8,
                        "end": 14
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 14
                },
                "flags": 256,
                "start": 0,
                "end": 14
            },
            "flags": 128,
            "start": 0,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 15,
                "end": 16
            },
            "flags": 128,
            "start": 15,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 768,
                "start": 16,
                "end": 18
            },
            "flags": 128,
            "start": 16,
            "end": 18
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 21,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "(class { await\\n a });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 8, end: 14
✖ Invalid hexadecimal escape sequence - start: 14, end: 14
✖ Statement expected - start: 14, end: 15
✖ Statement expected - start: 18, end: 20
✖ Statement expected - start: 20, end: 21

```

