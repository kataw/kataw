# Kataw parser test case

## Input

`````js
let [foo=a, bar] = arr;
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
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 5,
                                            "end": 8
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 10
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 10
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "start": 11,
                                        "end": 15
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 5,
                                "end": 15
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 16
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "arr",
                            "rawText": "arr",
                            "flags": 96,
                            "start": 18,
                            "end": 22
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 22
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 22
            },
            "flags": 33554448,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "let [foo=a, bar] = arr;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

let [foo = a, bar] = arr;
```

### Diagnostics

```javascript
✔ No errors
```

