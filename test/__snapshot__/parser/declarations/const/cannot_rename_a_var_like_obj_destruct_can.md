# Kataw parser test case

## Input

`````js
const [foo:bar] = obj;
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "binding": {
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
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 768,
                                            "start": 7,
                                            "end": 10
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 7,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 7,
                                "end": 10
                            },
                            "flags": 256,
                            "start": 5,
                            "end": 10
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 5,
                        "end": 10
                    }
                ],
                "flags": 160,
                "start": 5,
                "end": 10
            },
            "flags": 128,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 768,
                "start": 11,
                "end": 14
            },
            "flags": 128,
            "start": 11,
            "end": 14
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 768,
                "start": 17,
                "end": 21
            },
            "flags": 128,
            "start": 17,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "const [foo:bar] = obj;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ ',' expected - start: 10, end: 11
@{x2716}@ Unexpected token. - start: 10, end: 11
@{x2716}@ Missing initializer in const declaration - start: 10, end: 11
@{x2716}@ ',' expected - start: 10, end: 11
@{x2716}@ Unexpected token. - start: 10, end: 11
@{x2716}@ Statement expected - start: 10, end: 11
@{x2716}@ Unexpected token. - start: 14, end: 15
@{x2716}@ Statement expected - start: 14, end: 15
@{x2716}@ Statement expected - start: 15, end: 17

```

