# Kataw parser test case

## Input

`````js
for (let [foo] = arr, bar;;);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 64,
                    "start": 0,
                    "end": 8
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
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 10,
                                            "end": 13
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 10,
                                    "end": 13
                                },
                                "flags": 32,
                                "start": 8,
                                "end": 14
                            },
                            "type": null,
                            "initializer": {
                                "kind": 134299649,
                                "text": "arr",
                                "rawText": "arr",
                                "flags": 96,
                                "start": 16,
                                "end": 20
                            },
                            "flags": 16,
                            "start": 8,
                            "end": 20
                        },
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 21,
                                "end": 25
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "start": 21,
                            "end": 25
                        }
                    ],
                    "flags": 16,
                    "start": 8,
                    "end": 25
                },
                "flags": 33554448,
                "start": 0,
                "end": 25
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 28,
                "end": 29
            },
            "flags": 80,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "for (let [foo] = arr, bar;;);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

for (let  [ foo ] = arr, bar ;;)
  ;

```

### Diagnostics

```javascript
✔ No errors
```

