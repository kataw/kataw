# Kataw parser test case

## Input

`````js
const [...[foo, bar]] = obj;
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
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
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 7,
                                            "end": 10
                                        },
                                        "left": {
                                            "kind": 201,
                                            "elementList": {
                                                "kind": 324,
                                                "elements": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "foo",
                                                        "rawText": "foo",
                                                        "flags": 96,
                                                        "start": 11,
                                                        "end": 14
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 96,
                                                        "start": 15,
                                                        "end": 19
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "start": 11,
                                                "end": 19
                                            },
                                            "flags": 32,
                                            "start": 10,
                                            "end": 20
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 32,
                                        "start": 7,
                                        "end": 20
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 7,
                                "end": 20
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 23,
                            "end": 27
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 27
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 27
            },
            "flags": 33554448,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "const [...[foo, bar]] = obj;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

const [...[foo, bar]] = obj;
```

### Diagnostics

```javascript
✔ No errors
```

