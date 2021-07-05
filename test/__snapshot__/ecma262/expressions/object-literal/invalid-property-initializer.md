# Kataw parser test case

## Input

`````js
const obj = {
  foo = 123,
  bar: x = 123
};
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 5,
                            "end": 9
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 301,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 97,
                                            "start": 13,
                                            "end": 19
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 123,
                                            "rawText": "123",
                                            "flags": 96,
                                            "start": 21,
                                            "end": 25
                                        },
                                        "flags": 32,
                                        "start": 13,
                                        "end": 25
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 97,
                                            "start": 26,
                                            "end": 32
                                        },
                                        "right": {
                                            "kind": 125,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 33,
                                                "end": 35
                                            },
                                            "operatorToken": {
                                                "kind": 4125,
                                                "flags": 96,
                                                "start": 35,
                                                "end": 37
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 123,
                                                "rawText": "123",
                                                "flags": 96,
                                                "start": 37,
                                                "end": 41
                                            },
                                            "flags": 0,
                                            "start": 26,
                                            "end": 41
                                        },
                                        "flags": 33,
                                        "start": 26,
                                        "end": 41
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "start": 13,
                                "end": 41
                            },
                            "flags": 49,
                            "start": 11,
                            "end": 43
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 43
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 43
            },
            "flags": 33554448,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "const obj = {\n  foo = 123,\n  bar: x = 123\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 43, end: 44

```

