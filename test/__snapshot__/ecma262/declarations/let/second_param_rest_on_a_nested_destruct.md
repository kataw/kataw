# Kataw parser test case

## Input

`````js
let [x, ...[foo, bar]] = obj;
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
                "transformFlags": 0,
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
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 6
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 7,
                                            "end": 11
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
                                                        "transformFlags": 0,
                                                        "start": 12,
                                                        "end": 15
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "bar",
                                                        "rawText": "bar",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 16,
                                                        "end": 20
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 0,
                                                "transformFlags": 0,
                                                "start": 12,
                                                "end": 20
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 21
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 7,
                                        "end": 21
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 21
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 22
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 24,
                            "end": 28
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 28
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 28
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "let [x, ...[foo, bar]] = obj;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
let [x, ...[foo, bar]] = obj;
```

### Diagnostics

```javascript
✔ No errors
```

