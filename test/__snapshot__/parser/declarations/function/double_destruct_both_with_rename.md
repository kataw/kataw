# Kataw parser test case

## Input

`````js
let {x : y, z : a} = obj;
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
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
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
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 5,
                                            "end": 8
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 8,
                                                "end": 10
                                            },
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 8,
                                            "end": 10
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 10
                                    },
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 11,
                                            "end": 15
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 15,
                                                "end": 17
                                            },
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 15,
                                            "end": 17
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 17
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 5,
                                "end": 17
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 18
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 20,
                            "end": 24
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 24
                    }
                ],
                "flags": 33554448,
                "start": 3,
                "end": 24
            },
            "flags": 33554448,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "let {x : y, z : a} = obj;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

let {
  x: y,
  z: a
} = obj;
```

### Diagnostics

```javascript
✔ No errors
```

