# Kataw parser test case

## Input

`````js
const foo = arr, [bar] = arr2;
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
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 5,
                            "end": 9
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "arr",
                            "rawText": "arr",
                            "flags": 96,
                            "start": 11,
                            "end": 15
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 15
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "bar",
                                        "rawText": "bar",
                                        "flags": 96,
                                        "start": 18,
                                        "end": 21
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 18,
                                "end": 21
                            },
                            "flags": 32,
                            "start": 16,
                            "end": 22
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "arr2",
                            "rawText": "arr2",
                            "flags": 96,
                            "start": 24,
                            "end": 29
                        },
                        "flags": 16,
                        "start": 16,
                        "end": 29
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 29
            },
            "flags": 33554448,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "const foo = arr, [bar] = arr2;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

  const foo = arr, [bar] = arr2;

```

### Diagnostics

```javascript
✔ No errors
```

