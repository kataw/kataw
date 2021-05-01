# Kataw parser test case

## Input

`````js
let [foo=a] = arr;
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

### Hybrid CST

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
                            "kind": 201,
                            "elementList": {
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "original": "foo",
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 5,
                                            "end": 8
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 134299649,
                                            "original": "a",
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 10
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 10
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 5,
                                "end": 10
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 11
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "original": "arr",
                            "text": "arr",
                            "rawText": " arr",
                            "flags": 96,
                            "start": 13,
                            "end": 17
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 17
                    }
                ],
                "flags": 33554448,
                "start": 3,
                "end": 17
            },
            "flags": 33554448,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "let [foo=a] = arr;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

